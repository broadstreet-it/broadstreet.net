import StaffProfile, { staffMeta } from "../components/StaffProfile";

export const meta = () => staffMeta("tom-sliker");

export default function TomSliker() {
  return <StaffProfile slug="tom-sliker" />;
}
