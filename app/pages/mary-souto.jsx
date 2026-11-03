import StaffProfile, { staffMeta } from "../components/StaffProfile";

export const meta = () => staffMeta("mary-souto");

export default function MarySouto() {
  return <StaffProfile slug="mary-souto" />;
}
