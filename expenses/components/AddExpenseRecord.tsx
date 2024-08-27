import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    chakra,
    FormControl,
    FormLabel,
    Input,
    Stack,
    FormErrorMessage,
    Select,
    Textarea,
} from '@chakra-ui/react'
import { useFrappeCreateDoc } from 'frappe-react-sdk'
import { useForm } from 'react-hook-form'

type Props = {
    isOpen: boolean
    onClose: () => void
}

interface FormFields {
    description: string
    amount: number
    type: string
    remarks: string
}
export const AddExpenseRecord = ({ isOpen, onClose }: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>()

    const { createDoc, loading, error, reset } = useFrappeCreateDoc()
    const onSubmit = (data: FormFields) => {
        createDoc('Expense Record', data)
            .then(() => {
                onClose()
            })
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <chakra.form onSubmit={handleSubmit(onSubmit)} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Expense</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack>
                            <FormControl isRequired isInvalid={!!errors.description}>
                                <FormLabel>Description</FormLabel>
                                <Input type='text' {...register('description', {
                                    required: "Description is required",
                                    minLength: {
                                        value: 5,
                                        message: "Description should be at least 5 characters"
                                    }
                                })} />
                                <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={!!errors.amount}>
                                <FormLabel>Amount</FormLabel>
                                <Input type='number' {...register('amount', {
                                    required: "Amount is required",
                                    minLength: {
                                        value: 1,
                                        message: "Amount should be at least 1"
                                    }
                                })} />
                                <FormErrorMessage>{errors.amount?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired isInvalid={!!errors.type}>
                                <FormLabel>Type</FormLabel>
                                <Select {...register('type', {
                                    required: "Type is required",

                                })}>
                                    <option value=''>Select Type</option>
                                    <option value='Credit'>Credit</option>
                                    <option value='Debit'>Debit</option>

                                </Select>
                                <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!errors.remarks}>
                                <FormLabel>Remarks</FormLabel>
                                <Textarea {...register('remarks')} />
                                <FormErrorMessage>{errors.remarks?.message}</FormErrorMessage>
                            </FormControl>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button isLoading={loading} variant='ghost' type="submit">Save</Button>
                    </ModalFooter>
                </ModalContent>
            </chakra.form>
        </Modal>
    )
}