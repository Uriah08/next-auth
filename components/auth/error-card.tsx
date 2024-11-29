import { Header } from "./header";
import { BackButton } from "./back-button";
import { Card,CardFooter,CardHeader } from "../ui/card";

export const ErrorCard = () => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={'An error occurred'}/>
            </CardHeader>
            <CardFooter>
                <BackButton href="/auth/login" label={"Go back"} />
            </CardFooter>
        </Card>
    )
}