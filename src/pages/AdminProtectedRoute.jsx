import { useUser, useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const adminEmail = "manasamithunb@gmail.com";

export default function AdminProtectedRoute({ children }) {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    if (!isLoaded) return;

    if (!user) return;

    if (user.primaryEmailAddress?.emailAddress === adminEmail) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      alert("❌ Sorry, you are not permitted to access this page.");
      signOut().then(() => navigate("/admin")); // redirect to sign-in
    }
  }, [isLoaded, user, signOut, navigate]);

  if (!isLoaded || isAdmin === null) return <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>;
  if (!isAdmin) return null;

  return children;
}
