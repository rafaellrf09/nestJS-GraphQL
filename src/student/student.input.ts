import { InputType, Field } from "@nestjs/graphql";
import { MinLength, MaxLength } from "class-validator";

@InputType()
export class CreateStudentInput {
    @MinLength(1)
    @MaxLength(20)
    @Field()
    firstName: string;

    @MinLength(1)
    @MaxLength(20)
    @Field()
    lastName: string;
}