import { useSearchParams } from "react-router-dom";
import RegisterForm from "../components/user/register/RegisterForm";
import RegisterMain from "../components/user/register/RegisterMain";

export default function Register() {
  const [searchParams] = useSearchParams();

  return (
    <>
      {searchParams.get("type") === null ? <RegisterMain /> : <RegisterForm />}
    </>
  );
}
