board = [["0","1","2"],
         ["3","4","5"],
         ["6","7","8"]]

def print_board():
    for row in board:
        print(row)


def check_game(mark):
    #First let's check rows
    for i in range (3):
        if board[i][0] == mark and board[i][1] == mark and board[i][2]== mark:
            return True
    # then columns
    for i in range (3):
        if board[0][i] == mark and board[1][i] == mark and board[2][i]== mark:
            return True

    # first diagonal
    if board[0][0] == mark and board[1][1] == mark and board[2][2]== mark :
        return True 
    if board[0][2] == mark and board[1][1] == mark and board[2][0]== mark :
        return True 
    return False


def play_tic_tak_toe():
    current_player = "1"
    mark = "X"
    moves = 0

    while(moves<9):
        print_board()

        print("player " + current_player + " move")
        print("Please enter the cell no: ")
        cell = int(input())

        row = cell//3
        col = cell%3

        if board[row][col] != "X" and board[row][col] != "O":
            board[row][col] = mark
            moves+= 1
            result = check_game(mark)
        else:
            print("This cell is already occupied, try another one.")
            continue

        if result:
            print("!!!Player"+ current_player + "has won the game!!!!")
            break
        if moves==9:
            print("!!!!!! Draw !!!!!!")

        if current_player == "1":
            current_player = "2"
            mark = "O"
        else:
            current_player = "1"
            mark="X"
play_tic_tak_toe()


