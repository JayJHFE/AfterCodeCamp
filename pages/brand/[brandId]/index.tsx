import { useAuth } from "../../../src/components/commons/hooks/auth/useAuth";
import BrandDetailComponent from "../../../src/components/units/Brand/Detail/BrandDetail.index";

export default function BrandDetailPage() {
  useAuth();
  return <BrandDetailComponent />;
}
