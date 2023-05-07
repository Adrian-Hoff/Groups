import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "storage/storage_config";
import { get_all_groups } from "./get_all_groups";

export async function group_create(new_group: string) {
  try {
    const stored_groups = await get_all_groups();
    const storage = JSON.stringify([...stored_groups, new_group]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
