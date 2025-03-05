import { EmailData } from "../types";

export function SendMail(data: EmailData) {
  const headers: Headers = new Headers()
  headers.set('Content-Type', 'application/json')
  // We also need to set the `Accept` header to `application/json`
  // to tell the server that we expect JSON in response
  headers.set('Accept', 'application/json')

  const request: RequestInfo = new Request('http://127.0.0.1:5000/mail', {
    // We need to set the `method` to `POST` and assign the headers
    method: 'POST',
    headers: headers,
    // Convert the user object to JSON and pass it as the body
    body: JSON.stringify(data)
  })

  // Send the request and print the response
  return fetch(request).then((response) => {
    console.log(response)
  })
}
