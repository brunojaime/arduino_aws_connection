import json
import boto3

print("Loading function")

def lambda_handler(event, context):
    #event will be the received data. In this case I am using an apigateway
    id = event['queryStringParameters']['id']
    name = event['queryStringParameters']['name']
    description= event['queryStringParameters']['description']
    
    dynamodb_client = boto3.resource('dynamodb')
    table = dynamodb_client.Table('ESP_PRUEBA') #This is the name of the dynamodb

    response=table.put_item(Item=event)

    
    return {
        'statusCode': 200,
        'body': json.dumps(response)
        #'body': json.dumps("Hola putttiiiiin. Ya funcionando!")
    }





