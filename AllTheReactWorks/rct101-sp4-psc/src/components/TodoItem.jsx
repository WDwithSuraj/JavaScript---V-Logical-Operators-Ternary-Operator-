import { Card, CardHeader, Heading, CardFooter, CardBody, Text,Button, Checkbox} from '@chakra-ui/react'


function TodoItem({id, title, status, handleUpdate, handleDelete}){
        return <Card>
    <CardHeader>
      <Heading size='md'>{title} </Heading>
    </CardHeader>
    <CardBody>
        <Checkbox isChecked={status}  onChange={()=> handleUpdate(id)}>
        <Text>{status?'DONE' : 'NOT DONE'}</Text>
      </Checkbox>
    </CardBody>
    <CardFooter>
      <Button onClick={()=> handleDelete(id)}>Delete</Button>
    </CardFooter>
  </Card>
}

export {TodoItem}