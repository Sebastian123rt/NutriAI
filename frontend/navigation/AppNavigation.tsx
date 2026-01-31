import { View, Text, Button } from "react-native";

export default function WelcomeScreen({ navigation }: any) {
    return (
    <View>
    <Text>Welcome to NutritionAI Hunger</Text>
    <Button title="Login" onPress={() => navigation.navigate("Login")} />
    <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
    );
}



