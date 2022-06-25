export type AletMessageProps = {
    severity: 'error' | 'warning' | 'info' | 'success';
    message: string;
    open: boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void
}