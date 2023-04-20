import numpy as np

for i in range(10):
    print("========================")
    np.random.seed(i)    

    matrix = np.random.randint(-10, 10, size=(4, 5))
    print(matrix)
    # for row in matrix:
    #     X1 = f"{row[0]}X1 " if row[0] != 0 else ' '
    #     X2 = f"{'+ ' if row[1] > 0 else '- '}{abs(row[1])}X2 " if row[1] != 0 else ''
    #     X3 = f"{'+ ' if row[2] > 0 else '- '}{abs(row[2])}X3 " if row[2] != 0 else ''
    #     X4 = f"{'+ ' if row[3] > 0 else '- '}{abs(row[3])}X4 " if row[3] != 0 else ''
    #     C = str(row[4])
    #     print(X1+X2+X3+X4+' = '+C)