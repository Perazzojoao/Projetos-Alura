/*
Copyright © 2024 NAME HERE <EMAIL ADDRESS>
*/
package net

import (
	"fmt"

	"github.com/spf13/cobra"
)

var urlPath string

// pingCmd represents the ping command
var pingCmd = &cobra.Command{
	Use:   "ping",
	Short: "Send a ping to a URL.",
	Long: `Send a ping to a URL. For example: 

toolbox net ping -u https://www.google.com`,
	Run: func(cmd *cobra.Command, args []string) {
		cmd.Help()
	},
}

func init() {
	pingCmd.Flags().StringVarP(&urlPath, "url", "u", "", "URL to ping")
	if err := pingCmd.MarkFlagRequired("url"); err != nil {
		fmt.Println(err.Error())
	}

	NetCmd.AddCommand(pingCmd)
}
