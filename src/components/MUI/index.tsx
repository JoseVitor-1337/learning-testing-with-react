import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

export const MUIMode: React.FC = () => {
  const theme = useTheme()

  return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
}
