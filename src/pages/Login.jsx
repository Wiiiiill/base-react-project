import { Input, Label, FormText } from "reactstrap";
export default function Login() {
    return (
        <div>
            <div>
                <Label for="exampleEmail">
                    Input without validation
                </Label>
                <Input />
                <FormText>
                    Example help text that remains unchanged.
                </FormText>
            </div>
        </div>
    );
}
