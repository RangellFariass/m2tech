import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

type Props = TouchableOpacityProps & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false, ...rest }: Props){
    return (
        <TouchableOpacity
        activeOpacity={0.7}
        disabled={isLoading}
        className="w-full h-14 bg-purple-200 items-center justify-center rounded-lg"
        {...rest}
        >   
        {isLoading ? (
            <ActivityIndicator className="text-white" />
        ) : (
        <Text className="text-white text-base front-bold uppercase">
            {title}
            </Text>
        )}
        </TouchableOpacity>
    )
}