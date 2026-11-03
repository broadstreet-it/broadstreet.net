import StaffProfile, { staffMeta } from "../components/StaffProfile";

export const meta = () => staffMeta("buster");

export default function Buster() {
  return <StaffProfile slug="buster" />;
}
