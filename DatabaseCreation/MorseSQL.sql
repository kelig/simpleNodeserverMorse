CREATE DATABASE nma;
USE nma;

create table `MorseCodes` (
	`Id` int (11) NOT NULL AUTO_INCREMENT,
	`MorseLetter` text ,
	`Morsecode` text ,
    PRIMARY KEY (Id)
); 
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('1','A','.-');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('2','B','-...');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('3','C','-.-.');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('4','D','-..');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('5','E','.');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('6','F','..-.');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('7','G','--.');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('8','H','....');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('9','I','..');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('10','J','.---');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('11','K','-.-');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('12','L','.-..');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('13','M','--');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('14','N','-.');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('15','O','---');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('16','P','.--.');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('17','Q','--.-');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('18','R','.-.');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('19','S','...');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('20','T','-');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('21','U','..-');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('22','V','...-');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('23','W','.--');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('24','X','-..-');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('25','Y','-.--');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('26','Z','--..');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('27','0','-----');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('28','1','.----');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('29','2','..---');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('30','3','...--');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('31','4','....-');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('32','5','.....');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('33','6','-....');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('34','7','--...');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('35','8','---..');
insert into `MorseCodes` (`Id`, `MorseLetter`, `Morsecode`) values('36','9','----.');
