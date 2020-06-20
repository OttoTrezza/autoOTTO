#define TIMER_INTERRUPT_DEBUG      1

#include "ESP8266TimerInterrupt.h"
#include <ESP8266WiFi.h>
#include <SocketIOClient.h>
#include <ArduinoJson.h>
#include <string>
#include <sstream>

/*****************************/
   
/*****************************/
#define M1_marcha         4 
#define M1_dir            5 
#define M2_a              12 
#define M2_b              13
#define en1               14
// #define en2               4

ESP8266Timer ITimer;
/*****************************/

/*****************************/
SocketIOClient client;
 const char* ssid     = "WOLVERINE2.4"; //Wifi SSID
 const char* password = "wolverine24"; //Wifi Pass

 char  host[] = "192.168.0.38" ; // "https://auto-otto.herokuapp.com";
 int port = 3000; // nodejs port 3000

/*****************************/

/*****************************/
volatile unsigned long rotationTime1 = 0;
volatile unsigned long rotationTime1R = 0;
volatile unsigned long rotationTime1Rb = 20;

volatile unsigned long rotationTime2 = 0;
volatile unsigned long rotationTime2R = 0;
volatile unsigned long rotationTime2Rb = 20;
volatile unsigned long ancho;
volatile unsigned long ancho1;

volatile int debounceCounter1 = 0;
volatile int debounceCounter2 = 0;
volatile int frecuencia = 200;
volatile int LongPulse = 50;
volatile int LongPulse1;
volatile int LongPulse2;
volatile int conta2;

volatile bool activeState1 = false;
volatile bool activeState2 = false;
volatile bool paso = false;
volatile int dir = 0;
volatile int sen = 0;
volatile int bet = 0;
volatile int gamm = 0;
volatile int a1, b1, a2, b2;
volatile int i = 1;
volatile int i1 = 1;

/*****************************/

/*****************************/

void setup() 
  {

   pinMode(M1_dir, OUTPUT);  
   pinMode(M1_marcha, OUTPUT);
   pinMode(M2_a, OUTPUT);  
   pinMode(M2_b, OUTPUT);
   pinMode(en1, OUTPUT);
  
   digitalWrite(M1_marcha, LOW);
   digitalWrite(M1_dir, LOW);
   digitalWrite(en1, LOW); // REVISAR...TAL VEZ SEA HIGH !!! *** --- 

/*****************************/

   Serial.begin(115200);
   delay(10);
   Serial.println();
   Serial.println();
   Serial.print("Connecting to ");
   Serial.println(ssid);

   WiFi.begin(ssid, password);

   while (WiFi.status() != WL_CONNECTED) {
     delay(500);
     Serial.print(".");
   }

   Serial.println("");
   Serial.println("WiFi connected");
   Serial.println("IP address: ");
   Serial.println(WiFi.localIP());
   
 if (!client.connect(host, 3000)) {
     Serial.println("connection failed");
     return;
   }
   
   /*****************************/
  
   StaticJsonDocument<600> doc;
   String JSON;
   doc["nombre"] = "ignacio";
   doc["sala"] = "Juegos";
   doc["img"] = "5d38d563ec2c35d0344d862f-611.png";
   serializeJson(doc, JSON);
   client.sendJSON("entrarChat",JSON);
   digitalWrite(en1, HIGH);
  
  
  
}
void loop() {

    
   String json = client.on();
    
   if (json.length() > 0) 
    {
    Serial.println();
    
    const size_t capacity = JSON_ARRAY_SIZE(3) + JSON_OBJECT_SIZE(2) +550;
    
    DynamicJsonDocument doc3(capacity);
    
    deserializeJson(doc3, json);

    String event = doc3[0]; // "mensaje"

    Serial.print("event: ");
    Serial.println(event);
    
    /*****************************/

    if (event == "mensaje") 
      {
      String mensaje = doc3[1]["cuerpo"]; 
      String nombre = doc3[1]["de"];  

      Serial.print(" user ");
      Serial.print(nombre);
      Serial.print(" says: ");
      Serial.println(mensaje);
      }
      
   /* if (event == "mensajedir-nuevo") 
      {
      String dirr = doc3[1]["dir"]; 
      String nombre = doc3[1]["de"];  
      dir = dirr.toInt();
      Serial.print(" user ");
      Serial.print(nombre);
      Serial.print(" says: ");
      Serial.println(dir);
      
      if (-4 <= dir <= 4)
        {
        digitalWrite(M1_marcha, LOW);
        digitalWrite(M1_dir, LOW);    
        }  
      if (dir > 4) 
      {
      digitalWrite(M1_marcha, HIGH);
      digitalWrite(M1_dir, LOW);
      }else if(dir < -4) 
        {   
        digitalWrite(M1_marcha, LOW);  
        digitalWrite(M1_dir, HIGH);
        } 
     }
      
   if (event == "mensajesen-nuevo") 
        {
        String senn = doc3[1]["sen"]; 
        String nombre = doc3[1]["de"];  
        sen = senn.toInt();
        Serial.print(" user ");
        Serial.print(nombre);
        Serial.print(" says: ");
        Serial.println(sen);
        
        if (-4 <= sen <= 4)
          {
          digitalWrite(M2_a, LOW);
          digitalWrite(M2_b, LOW);    
          }  
        if (sen > 4) 
          {
          digitalWrite(M2_a, LOW);
          digitalWrite(M2_b, HIGH);    
          }else if(sen < -4) 
            {   
            digitalWrite(M2_a, HIGH);  
            digitalWrite(M2_b, LOW);
            } 
        }
*/
   if (event == "ElSarmiento-nuevo") 
        {
        String bett = doc3[1]["beta1"]; 
        String gammm = doc3[1]["gamma1"]; 
        String nombre = doc3[1]["de"];  
        bet = bett.toInt();
        gamm = gammm.toInt();
        Serial.print(" user ");
        Serial.print(nombre);
        Serial.print(" says: ");
        Serial.println(bet);
        
        if (-4 <= bet <= 4)
          {
          digitalWrite(M2_a, LOW);
          digitalWrite(M2_b, LOW);    
          }  
        if (bet > 4) 
          {
          digitalWrite(M2_a, LOW);
          digitalWrite(M2_b, HIGH);    
          }else if(bet < -4) 
            {   
            digitalWrite(M2_a, HIGH);  
            digitalWrite(M2_b, LOW);
            } 
         if (-4 <= gamm <= 4)
        {
        digitalWrite(M1_marcha, LOW);
        digitalWrite(M1_dir, LOW);    
        }  
      if (gamm > 4) 
      {
      digitalWrite(M1_marcha, HIGH);
      digitalWrite(M1_dir, LOW);
      }else if(gamm < -4) 
        {   
        digitalWrite(M1_marcha, LOW);  
        digitalWrite(M1_dir, HIGH);
        } 
        }
   
    /*if (event == "frecuencia") 
      {   
      String de = doc3[1]["de"];  
      String frecuenciaa = doc3[1]["frec"]; 
      
      frecuencia = frecuenciaa.toInt();
      Serial.println(frecuencia); 
        
    }
    if (event == "LongPulse") {
      
      String de = doc3[1]["de"]; // "Holas"  
      String LongPulsee = doc3[1]["LongP"]; // "Holas"  
      
      LongPulse = LongPulsee.toInt();
      Serial.println(LongPulse);   
    }
   */
    if (event == "usuarios-activos") {
      String usuario1 = doc3[1][""]; // true || false
      String usuario2 = doc3[1][""]; 
      String usuario3 = doc3[1][""]; 
        Serial.println(" user ");
        Serial.println(usuario1);
        Serial.println(usuario2);
        Serial.println(usuario3);
        Serial.print(" is in the room!");
     
    }
    if (event == "disconnect") {

      String nombre = doc3[1]["nombre"];
      Serial.print(" user: ");
      Serial.print(nombre);
      Serial.print(" has left the room");
    }
  }
}