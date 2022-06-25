import { Alert, Snackbar } from '@mui/material'
import { AletMessageProps } from './props'

const AlertMessageComponent = (props: AletMessageProps): JSX.Element => {
    const { message, severity, open, setOpen } = props

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity={severity}>{message}</Alert>
        </Snackbar>
    )
}

export default AlertMessageComponent
