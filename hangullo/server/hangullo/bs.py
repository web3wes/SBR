import requests
from bs4 import BeautifulSoup

URL = "https://www.sayjack.com/korean/korean-hanja/characters/title:%E7%BE%85"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
print(soup.content_1Zyt)
mydivs = soup.find_all("dd", {"class": "content_1Zyt"})
defintions = mydivs[len(mydivs)//2:]


for defintion in defintions:
    print(defintion.contents)
# print(definiton)