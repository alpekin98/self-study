# Self Study

## Gerekli Teknolojiler

Docker
Docker-compose

## Komutlar

Terminali açın ve istediğiniz bir dizine gidin.

```
git clone https://github.com/alpekin98/self-study.git
cd self-study
docker-compose up
```

Docker-compose bütün gerekli ayarlamaları yapıcaktır.
Bu ayarlar:
Node konteynırı kurulumu (Dockerfile-node)
Node konteynırına uygulamanın kurulumu
Nginx konteynırı kurulumu ve uygulamanın nginx ile ayakta tutulması
Jenkins konteynırı kurulumu (Dockerfile-jenkins)
Jenkins pluginleri, ENV değişkenleri ayarlanması
Jenkinsin ayağa kaldırılması

Tüm işlemler bittikten sonra
http://localhost:8081 adresinde uygulama
http://localhost:8082 adresinde jenkins çalışır durumda olucaktır

jenkinse girdikten sonra Job hazır gelmektedir (CasC plugini sayesinde)

Ancak allure reports plugini için manuel ayar yapılması gerekiyor.
http://localhost:8082/configureTools/ adresine gidin.
En aşağı kaydırın ve Add Allure Commandline butonuna tıklayın.
Name kısmına dilediğiniz bir isim girin.
Aşağıdaki version kısmından en son versiyonu seçin ve Apply, ardından Save butonuna tıklayıp kaydedin.

Dashboard'a gidin ve self-study jobuna girin.
Build now diyerek pipeline'ı build edebilirsiniz.

## Diğer komutlar

Uygulamayı tek başına kurup manuel deneyebilirsiniz.

```
ng serve
```

ile uygulamayı ayağa kaldırın

```
ng test
```

ile unit test yapabilirsiniz.

```
ng e2e
```

ile end to end testleri yapabilirsiniz.
