import {
  Box,
  CardMedia,
  Typography,
  Card,
  CardHeader,
  Divider,
  Avatar,
  IconButton,
  Button,
  CardActions,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';

import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import Text from '../../../../components/Text';
import { useSelector } from 'react-redux';
import { StateType } from '../../../../reducer/dataType';

const CardActionsWrapper = styled(CardActions)(
  ({ theme }) => `
     background: ${theme.colors.alpha.black[5]};
     padding: ${theme.spacing(3)};
`
);

function ActivityTab() {
  const currentUser: any = useSelector((state: StateType) => state.auth.user);
  
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src="/static/images/avatars/5.jpg" />}
        action={
          <IconButton color="primary">
            <MoreHorizTwoToneIcon fontSize="medium" />
          </IconButton>
        }
        titleTypographyProps={{ variant: 'h4' }}
        subheaderTypographyProps={{ variant: 'subtitle2' }}
        title={currentUser.firstName + " " + currentUser.lastName}
        subheader={
          <>
            {currentUser.type},{' '}
            <Link href="#" underline="hover">
              #software
            </Link>
            ,{' '}
            <Link href="#" underline="hover">
              #managers
            </Link>
            , OFFERNIGHTS.
          </>
        }
      />
      <Box px={3} pb={2}>
        <Typography variant="h4" fontWeight="bold">
          Welcome to our websites - OFFERNIGHTS
        </Typography>
      </Box>
      <CardMedia
        sx={{ minHeight: 280 }}
        image="/static/images/houses/house (1).jpg"
        title="Card Cover"
      />
      <Divider />
      <CardActionsWrapper
        sx={{
          display: { xs: 'block', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box>
          <Button startIcon={<ThumbUpAltTwoToneIcon />} variant="contained">
            My Customers
          </Button>
          <Button
            startIcon={<CommentTwoToneIcon />}
            variant="outlined"
            sx={{ mx: 2 }}
          >
            My Comments
          </Button>
          <Button startIcon={<ShareTwoToneIcon />} variant="outlined">
            Contact with server
          </Button>
        </Box>
        <Box sx={{ mt: { xs: 2, md: 0 } }}>
          <Typography variant="subtitle2" component="span">
            <Text color="black">
              <b>485</b>
            </Text>{' '}
            reactions •{' '}
            <Text color="black">
              <b>63</b>
            </Text>{' '}
            comments
          </Typography>
        </Box>
      </CardActionsWrapper>
    </Card>
  );
}

export default ActivityTab;
