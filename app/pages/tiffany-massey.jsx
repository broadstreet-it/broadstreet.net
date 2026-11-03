import StaffProfile, { staffMeta } from "../components/StaffProfile";

export const meta = () => staffMeta("tiffany-massey");

export default function TiffanyMassey() {
  return <StaffProfile slug="tiffany-massey" />;
}
