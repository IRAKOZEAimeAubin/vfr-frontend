'use client';

import { useMutation } from "@tanstack/react-query";
import { CreateProps } from "../members/createMember";
import axios from "../api/axios/axios";
import { GET_ALL_LOAN_TYPES } from "../services/getLoanTypes";

export default function CreateLoanTypes ( { token, setToggle }: CreateProps ) {
    const {mutate} = useMutation(
      async ({typeName, interestRate}: {typeName:string; interestRate:number}) =>
        await axios.post(`http://localhost:4000${GET_ALL_LOAN_TYPES}/`),
    )
}