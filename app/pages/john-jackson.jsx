import StaffProfile, { staffMeta } from "../components/StaffProfile";

export const meta = () => staffMeta("john-jackson");

export default function JohnJackson() {
  return <StaffProfile slug="john-jackson" />;
}
