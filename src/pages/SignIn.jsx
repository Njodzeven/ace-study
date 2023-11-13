import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import SignInOne from "../components/SignInOne";

const SignIn = () => {
    return (
      <>
        <Suspense fallback={<Preloader />}>
          <main>
            <SignInOne/>
          </main>
        </Suspense>
      </>
    );
  };
  
  export default SignIn;
  