interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

interface GoogleSignupParams {
  name: string;
  uid: string;
  email: string;
  idToken: string;
}
interface User {
  id: string;
  email: string;
  name: string;
  provider: string;
}