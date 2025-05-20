{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": []
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "source": [
        "Nama: Vara Desvita Maharani (24110310086) 2A Bisnis Digital"
      ],
      "metadata": {
        "id": "aVqZC3dZs_5N"
      }
    },
    {
      "cell_type": "markdown",
      "source": [
        "Program Rekursi Menghitung Faktorial"
      ],
      "metadata": {
        "id": "bgCOfOW6xOb9"
      }
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "colab": {
          "base_uri": "https://localhost:8080/"
        },
        "id": "VW1vcsfQs4aV",
        "outputId": "9a0bb42d-e352-4099-8daf-0e754274c932"
      },
      "outputs": [
        {
          "output_type": "stream",
          "name": "stdout",
          "text": [
            "Masukkan angka untuk menghitung faktorial: 26\n",
            "Faktorial dari 26 adalah 403291461126605635584000000\n"
          ]
        }
      ],
      "source": [
        "def faktorial(n):\n",
        "    # Basis kasus: faktorial dari 0 atau 1 adalah 1\n",
        "    if n == 0 or n == 1:\n",
        "        return 1\n",
        "    else:\n",
        "        # Rekursif: n * faktorial dari (n-1)\n",
        "        return n * faktorial(n - 1)\n",
        "\n",
        "# Meminta input dari pengguna\n",
        "angka = int(input(\"Masukkan angka untuk menghitung faktorial: \"))\n",
        "hasil = faktorial(angka)\n",
        "\n",
        "print(f\"Faktorial dari {angka} adalah {hasil}\")"
      ]
    }
  ]
}
