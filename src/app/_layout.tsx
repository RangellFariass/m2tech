import "@/styles/global.css"

import { Slot } from "expo-router"

import { Loading } from "@/components/loading"

import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular
} from "@expo-google-fonts/roboto"

export default function Layout() {
    const [FontsLoaded] = useFonts({
      Roboto_700Bold,
      Roboto_500Medium,
      Roboto_400Regular
    })

    if (!FontsLoaded) {
      return <Loading />
    }

    return <Slot />  
}
