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

## Ekran Görüntüleri
https://localhost/8082 adresini açtığınızda karşınıza çıkacak ilk ekran dashboard olacaktır. self-study job'u otomatik olarak oluşturuldu.
![dahsboard](https://user-images.githubusercontent.com/40849529/132942867-c1b07db7-c400-40ad-966e-97f8a26864c1.png)

http://localhost:8082/configureTools/ adresinde global tool'ları yönetibilirsiniz. NodeJS ayarı hazır olarak gelmektedir.
![nodejs](https://user-images.githubusercontent.com/40849529/132942871-13a8bba4-fbbf-4974-ab7f-8be375ec190e.png)

En aşağıda allure-reuslts için ayar yapılması gerekiyor. Ekran görüntüsündeki gibi yapılabilir.
![allure](https://user-images.githubusercontent.com/40849529/132942862-e35e5252-987e-4dd5-b91c-a7583cb60973.png)

Job ekranından job'u yönetebilirsiniz. Burada Build Now diyip build işlemini başlatacağız.
![job](https://user-images.githubusercontent.com/40849529/132942869-c98f09dc-2e40-40f0-867d-6800de1a0a8a.png)

Build alırken pipeline ekranı buradaki gibi olacaktır. Göründüğü üzere #1 ve #2 numaralı buildler iptal edildi. #3 build ise başarısız olduğu için pipeline iptal oldu ve başarısız olarak gözükmektedir. Son build ise sorunsuz bir şekilde tamamlandı.
![build](https://user-images.githubusercontent.com/40849529/132942866-81cdb72a-8dc5-4bac-a374-e1d7f841eb9b.png)

Job ekranında Allure Reports kısmından da testlerin sonuçlarına göz atabilirsiniz.
![allure-result](https://user-images.githubusercontent.com/40849529/132942864-0087a146-7db9-4b1c-b338-3845e1b6cb18.png)
