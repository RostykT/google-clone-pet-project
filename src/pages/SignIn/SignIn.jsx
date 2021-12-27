import {signInWithGoogle} from '../../firabase/firebase';

const SignIn = () => {
  return (
    <div>
      <h1> Sign in Page</h1>
      <button onClick={signInWithGoogle}>sign in with Google </button>
    </div>
  );
};

export default SignIn;
