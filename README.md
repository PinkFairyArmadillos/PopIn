<!-- Here is the schema for our Events and Users-->
# Google API Key
AIzaSyC6vH8jJpTwdaLSv4TwoGTJHqNVnP43Yic

# PopIn

# Event Object

{
title: string
time: string
description: string
userId: number
geoLocation: object 
address: string
}

# Users Object

<!-- Instagram API https://www.instagram.com/developer/endpoints/users/ -->

{
username: string
full name: string
profile-picture: string
}

# API Routes

POST /api/events
GET /api/events

# Work Flow

Webpack
postgreSQL
Express
React App
Google API

# Twitter Oauth

# Access token:

1259208926568087556-MeFvydxprpKiWE6eUpEJKCZHdKu9Jg

# Access token secret:

rgQxgtrsK6sahzmsALOqop8QGH5QekyCjA5e10iRDyrww

# Instagram Oauth

_Facebook ID_
261914918546253

_Instagram App ID_
1125091257854158

Instagram Secret
7836770ba260adfa60d3abb23004b90b

Redirect URI
http://github.com/PinkFairyArmadillos/PopIn

https://api.instagram.com/oauth/authorize
?client_id=1125091257854158
&redirect_uri=https://localhost:3000
&scope=user_profile,user_media
&response_type=code

curl -X POST \
 https://api.instagram.com/oauth/access_token \
 -F client_id=1125091257854158 \
 -F client_secret=7836770ba260adfa60d3abb23004b90b \
 -F grant_type=authorization_code \
 -F redirect_uri=https://github.com/PinkFairyArmadillos/PopIn \
 -F code=AQAT7yeNj2ywp2NpP6QuCHvlMAqvEl6jKmGjAZ2Uj9Uta6EEcJZJZfyHA9B1wCR-5FJHV0NwoHcKlnXFwXooEQMstgv3dAtJxPoi6XyjZxlWyRsRUGV5EQKTKDQ-hBdmQPRDQGQioUH0y3LjVIoTOnA9KQXlRqWfuOxw12LPH4jIDIeAyXlDeZC5RnohYD3m1UwnY7DlX3iJKbuBc_Lqa2lHq09TFkOYOelSM4y_VlOWvA

https://github.com/PinkFairyArmadillos/PopIn?code=AQAT7yeNj2ywp2NpP6QuCHvlMAqvEl6jKmGjAZ2Uj9Uta6EEcJZJZfyHA9B1wCR-5FJHV0NwoHcKlnXFwXooEQMstgv3dAtJxPoi6XyjZxlWyRsRUGV5EQKTKDQ-hBdmQPRDQGQioUH0y3LjVIoTOnA9KQXlRqWfuOxw12LPH4jIDIeAyXlDeZC5RnohYD3m1UwnY7DlX3iJKbuBc_Lqa2lHq09TFkOYOelSM4y_VlOWvA#_
