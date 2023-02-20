import { useAuth } from "../../src/components/commons/hooks/auth/useAuth";
import BrandMain from "../../src/components/units/Brand/main/Brandmain.index";

export default function BrandPage() {
  useAuth();
  return <BrandMain />;
}
