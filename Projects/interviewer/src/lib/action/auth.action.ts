'use server'

import { db, auth } from '@/firebase/admin'
import { cookies } from 'next/headers'

const ONE_WEEK = 7 * 24 * 60 * 60; // in seconds

export async function signupWithGoogle(params: GoogleSignupParams) {
  const { email, idToken, uid, name } = params;

  try {
    const userRecord = await db.collection('users').doc(uid).get();
    if (userRecord.exists) {
      await setSessionCookies(idToken);
      return {
        success: true,
        message: "User already exists"
      }
    }

    await db.collection('users').doc(uid).set({
      email,
      name,
      provider: "google"
    });

    await setSessionCookies(idToken);

    return {
      success: true,
      message: "User created successfully"
    };
  } catch (error) {
    console.error("Error signing up with Google:", error);
    return {
      success: false,
      message: "Error signing up with Google"
    };
  }
}

export async function setSessionCookies(idToken: string) {
  const cookieStore = cookies(); // ✅ no await
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK * 1000, // ✅ convert seconds → ms
  });

  cookieStore.set('session', sessionCookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: ONE_WEEK, // ✅ still in seconds
    path: '/',
    sameSite: 'lax'
  });
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session')?.value;
  if (!sessionCookie) {
    return null;
  }

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
    const userRecord = await db.collection('users').doc(decodedClaims.uid).get();
    if (!userRecord.exists) return null;

    return {
      id: userRecord.id,
      ...userRecord.data()
    } as User;

  } catch (error) {
    console.error("Error verifying session cookie:", error);
    return null;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return !!user;
}

export async function signOut() {
  const cookieStore = cookies();
  cookieStore.set('session', "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
    path: '/',
    sameSite: 'lax'
  });

  return {
    success: true,
    message: "User signed out successfully"
  };
}
