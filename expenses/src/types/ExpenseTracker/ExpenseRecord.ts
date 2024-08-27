
export interface ExpenseRecord{
	name: string
	creation: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Type : Select	*/
	type: "Debit" | "Credit"
	/**	Amount : Float	*/
	amount: number
	/**	Description : Data	*/
	description: string
	/**	Remarks : Small Text	*/
	remarks?: string
	/**	Formatted Amount : Currency	*/
	formatted_amount?: number
}