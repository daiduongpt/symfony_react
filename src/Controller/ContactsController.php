<?php


namespace App\Controller;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class ContactsController extends BaseController
{
    /**
     * @Route("/api/contacts/getContactList", name="api_get_contact_list")
     *
     */
    public function getContactList(Request $request)
    {
        $test = [
            [
                '_id'        => 1,
                'name'      => [
                    'firstName' => 'Duong',
                    'lastName'  => 'Vu',
                ],
                'phone'     => "0387665204",
                'email'     => 'daiduongptit090@gmail.com'
            ],
            [
                '_id'        => 2,
                'name'      => [
                    'firstName' => 'Ha',
                    'lastName'  => 'Nguyen',
                ],
                'phone'     => "0387665204",
                'email'     => 'daiduongptit090@gmail.com'
            ]
        ];

        $response = new Response(json_encode(['data' => $test]));

        return $response;
    }
}