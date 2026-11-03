import StaffProfile, { staffMeta } from "../components/StaffProfile";

export const meta = () => staffMeta("danielle-wolsleben");

export default function DanielleWolsleben() {
  return <StaffProfile slug="danielle-wolsleben" />;
}
