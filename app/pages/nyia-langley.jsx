import StaffProfile, { staffMeta } from "../components/StaffProfile";

export const meta = () => staffMeta("nyia-langley");

export default function NyiaLangley() {
  return <StaffProfile slug="nyia-langley" />;
}
