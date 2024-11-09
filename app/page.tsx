import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Signup from "./sign-up/page";
import SignIn from "./sign-in/page";

export default function Home() {
  return (
    // <Signup />
    <SignIn />
  );
}
