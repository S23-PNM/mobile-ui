import { View } from "react-native";
import Storeinformation from "../components/storeInformation";

export default function Storepage() {
  return (
    <View>
      <Storeinformation
        storeName="The Commons"
        topAddress="390 S 8th St"
        populationStatus="Moderate"
      />
    </View>
  );
}
