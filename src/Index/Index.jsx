import { Routes, Route } from "react-router-dom"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"
import AppLayout from "../AppLayout/AppLayout"
import Dashboard from "../pages/Dashboard/Dashboard"
import Item from "../pages/Item/Item"
import Stock from "../pages/Stock/Stock"
import Invoices from "../pages/Invoices/Invoices"
import Sales from "../pages/Sales/Sales"
import Reports from "../pages/Reports/Reports"

const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<AppLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="item" element={<Item />} />
                <Route path="stock" element={<Stock />} />
                <Route path="invoice" element={<Invoices />} />
                <Route path="sales" element={<Sales />} />
                <Route path="reports" element={<Reports />} />
            </Route>
        </Routes>
    )
}

export default Index