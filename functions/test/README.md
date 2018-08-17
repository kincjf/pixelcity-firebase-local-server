## 사용 방법

####1. README.md가 있는 폴더에 아래의 이름에 해당하는 파일을 삽입한다

"firebase-test-config.json" 
```
{
	"apiKey": "asdfasdfasdfasdf34",
	"authDomain": "example.firebaseapp.com",
	"databaseURL": "https://example.firebaseio.com",
	"projectId": "example-test1",
	"storageBucket": "example.appspot.com",
	"messagingSenderId": "748612485912"
}
```
firebase 설정 -> 프로젝트 설정 -> 웹앱 추가 후 config 정보 삽입


"gcloud-pixelcity-test.json"
```
{
	"type": "service_account",
	"project_id": "pixelcity-test1",
	"private_key_id": "[private key]",
	"private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
	"client_email": "example@example.iam.gserviceaccount.com",
	"client_id": "1123846309454",
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://accounts.google.com/o/oauth2/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9wout%40example.iam.gserviceaccount.com"
}
```
firebase 설정 -> 프로젝트 설정 -> 사비스계정 -> Firebase Admin SDK -> 새 비공개 키 생성 후 config 정보 삽입


####2. 아래의 값에 해당하는 firebase functions config를 입력한다
```
{
  "service": {
    "env": "development OR production",
    "nakama": {
      "port": "NAKAMA_PORT",
      "host": "NAKAMA_SERVER_IP",
      "serverkey": "NAKAMA_SERVER_KEY"
    }
  }
}
```
참고: https://firebase.google.com/docs/functions/config-env?hl=ko


####3. firebase deploy를 통한 배포
