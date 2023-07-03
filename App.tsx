import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import * as ContextMenu from "zeego/context-menu";
import { MenuTriggerProps } from "zeego/lib/typescript/menu";

const ContextMenuTrigger = ContextMenu.create(
  ({ children }: MenuTriggerProps) => (
    <TouchableOpacity className="aspect-square grow basis-16 items-center justify-center rounded bg-red-300 p-4">
      {children}
    </TouchableOpacity>
  ),
  "Trigger"
);

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        className="gap-2"
      >
        {Array.from({ length: 100 }, (_, i) => i).map((i) => (
          <ContextMenu.Root key={i}>
            <ContextMenuTrigger>
              <Text>{i}</Text>
            </ContextMenuTrigger>
          </ContextMenu.Root>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
