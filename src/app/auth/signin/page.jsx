"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const router = useRouter()
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        
      } else {
        router.replace();
        
      }
    } catch (error) {
      
    }
  };
  return (
    
      <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Typography variant="h4">
            <b>Welcome!</b>
          </Typography>
          <Typography variant="body2">Sign in to continue.</Typography>
        </div>

        <div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <InputField
              control={control}
              name="email"
              type="email"
              placeholder="example123@gmail.com"
              required
            />
            <Typography variant="body2" color="error" gutterBottom>
              {" "}
              {errors?.email?.message}
            </Typography>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputField
              control={control}
              name="password"
              type="password"
              required
            />
            <Typography variant="body2" color="error" gutterBottom>
              {" "}
              {errors?.password?.message}
            </Typography>
          </FormControl>
        </div>
        <br />
        <div>
          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold cursor-pointer px-6 py-2 rounded-md transition duration-300"
          >
            Login
          </Button>
        </div>
        <div className="mt-5 ml-1">
          {error}
          <Typography variant="body2" sx={{ alignSelf: "center" }}>
            Dont have an account?{" "}
            <Link href="/sign-up" className="mr-2">
              Sign up
            </Link>
          </Typography>
        </div>
      </form>
      <Button
        onClick={() => signIn("google")}
        className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 shadow-sm"
      >
        <GoogleIcon className="mr-2" /> Sign in with Google
      </Button>
      <Button
        onClick={() => signIn("twitter")}
        className="flex items-center justify-center bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 shadow-sm"
      >
        <XIcon className="mr-2" /> Sign in with Twitter
      </Button>

      <Button
        onClick={() => signIn("github")}
        className="flex items-center justify-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 shadow-sm"
      >
        <GitHubIcon className="mr-2" /> Sign in with GitHub
      </Button>
      
      
      </>
    
  );
};

export default Login;