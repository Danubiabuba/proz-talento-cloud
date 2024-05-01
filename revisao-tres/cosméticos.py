# lista_produtos = ["máscaras faciais","batons","esmaltes","perfumes","loções","xampus","sabonetes"," delineadores"]
# or produto in lista_produtos:
# print("Temos {} á venda!".format(produto))#

# Imprimir cada um dos itens da listas.
lista_produtos = ["máscaras faciais","batons","esmaltes","perfumes","loções","shampoo","sabonetes"," delineadores"]
for i in range(len(lista_produtos)):
    print(lista_produtos)

# Sustituindo dois indices a lista
lista_produtos[1] = "Rímel"
lista_produtos [4] = "Creme hidratante"

# Removendo dois indices da lista
lista_produtos.pop(7)

# Adicinando dois indices a lista
lista_produtos.append("Sabonete demaquilante")
lista_produtos.append("Fixador de maquiagem")

# Concatenar os itens da lista coma a frase.
for i in range(len(lista_produtos)):
    print("Temos"  , lista_produtos[i] , "á venda!")
