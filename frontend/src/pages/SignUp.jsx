import React, { Suspense } from "react";
import Preloader from "../elements/Preloader";
import SignUpOne from "../components/SignUpOne";


const SignUp = () => {
    return (
      <>
        <Suspense fallback={<Preloader />}>
          <main>
            <SignUpOne />
          </main>
        </Suspense>
      </>
    );
  };
  
  export default SignUp;
  