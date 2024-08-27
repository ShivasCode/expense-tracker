import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { ExpenseListTab } from "../../components/ExpenseListTab"
import { Dashboard } from "../../components/Dashboard"


export const Expenses = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Expense list</Tab>
                    <Tab>Dashboard</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ExpenseListTab />
                    </TabPanel>
                    <TabPanel>
                        <Dashboard />
                    </TabPanel>

                </TabPanels>
            </Tabs>
        </div>
    )
}