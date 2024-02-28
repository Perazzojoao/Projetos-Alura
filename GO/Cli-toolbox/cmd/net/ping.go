/*
Copyright © 2024 NAME HERE <EMAIL ADDRESS>
*/
package net

import (
	"fmt"
	"net"
	"net/http"
	"time"

	"github.com/spf13/cobra"
)

var urlPath string
var cliente = http.Client{
	Transport: &http.Transport{
		Dial: (&net.Dialer{Timeout: 3 * time.Second}).Dial,
	},
}

func ping(domain string) (int, error) {
	url := "https://" + domain
	req, err := http.NewRequest("HEAD", url, nil)
	if err != nil {
		return 0, err
	}
	resp, err := cliente.Do(req)
	if err != nil {
		return 0, err
	}
	resp.Body.Close()
	return resp.StatusCode, nil
}

// pingCmd represents the ping command
var pingCmd = &cobra.Command{
	Use:   "ping",
	Short: "Send a ping to a URL.",
	Long: `Send a ping to a remote URL ande returns the response. For example: 

toolbox net ping -u https://www.google.com`,
	Run: func(cmd *cobra.Command, args []string) {
		if resp, err := ping(urlPath); err != nil {
			fmt.Println(err)
		} else {
			fmt.Println("StatusCode", resp, "OK")
		}
	},
}

func init() {
	pingCmd.Flags().StringVarP(&urlPath, "url", "u", "", "URL to ping")
	if err := pingCmd.MarkFlagRequired("url"); err != nil {
		fmt.Println(err.Error())
	}

	NetCmd.AddCommand(pingCmd)
}
