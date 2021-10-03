import React, {useState, useEffect} from 'react';
import { Card, Typography, Button, CardActions, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";



const useStyles = makeStyles((theme) => ({
    picButton: {
        display: 'block',
        margin: 'auto'
    },
    root: {
        maxWidth: '700px',
        display: 'flex',
        margin: '0 auto',
    }
}));

const Documents = ({user}) => {
    const classes = useStyles();
    const [documents, setDocuments] = useState([]);


    useEffect(() => {
        (async function(){
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/covid-form/${user.id}`);
            const data = await response.json();
            setDocuments(data);
        })();
    }, [setDocuments, user]);

    return (
      <div>
        <Typography className={classes.title} variant="h3" component="h1">
          Your COVIDForms
        </Typography>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          <Card className={classes.root}>
            <CardActions>
              {documents.map((document) => (
                <>
                  <TreeItem nodeId="1" label={document.createdAt}>
                    <TreeItem nodeId="2" label="Calendar" />
                  </TreeItem>
                  <TreeItem nodeId="5" label="Documents">
                    <TreeItem nodeId="10" label="OSS" />
                    <TreeItem nodeId="6" label="MUI">
                      <TreeItem nodeId="8" label="index.js" />
                    </TreeItem>
                  </TreeItem>

                  <Link href={document.url} rel="noreferrer" target="_blank">
                    <Button variant="h5" component="h2">
                      {!!document.formName ? document.formName : "Form"}
                    </Button>
                  </Link>
                </>
              ))}
            </CardActions>
          </Card>
        </TreeView>
      </div>
    );
}

export default Documents